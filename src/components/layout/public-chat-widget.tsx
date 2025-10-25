'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MessageSquare, Send, X, FileText, Briefcase, MessageCircle as MessageCircleIcon, Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Input } from '../ui/input';
import { usePathname } from 'next/navigation';
import { getSupportResponse } from '@/ai/flows/support-chat-flow';

type Message = {
  id: number;
  sender: 'bot' | 'user';
  text: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: 'bot',
    text: '👋 Welcome to Gaupro! How can we help you today?',
  },
];

const topicOptions = [
    { icon: <FileText className="h-5 w-5" />, text: 'I want to request a quote' },
    { icon: <Briefcase className="h-5 w-5" />, text: 'I’m a service provider and want to join' },
    { icon: <MessageCircleIcon className="h-5 w-5" />, text: 'I need help with my existing request' },
    { icon: <MessageSquare className="h-5 w-5" />, text: 'Something else' },
];

export default function PublicChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  // Don't render the widget on pro-specific pages
  if (pathname.startsWith('/pro/')) {
    return null;
  }

  const handleSendMessage = async (e: React.FormEvent, text?: string) => {
    e.preventDefault();
    const messageText = (text || newMessage).trim();
    if (messageText === '') return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user' as const,
      text: messageText,
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await getSupportResponse(messageText);
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot' as const,
        text: aiResponse,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('AI response error:', error);
      const errorMessage = {
        id: messages.length + 2,
        sender: 'bot' as const,
        text: "Sorry, I'm having a little trouble connecting. Please try again in a moment.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className="fixed bottom-4 right-4 h-16 w-auto px-6 rounded-full shadow-lg text-lg"
        >
          <MessageSquare className="mr-2 h-6 w-6" />
          Have a question? Chat with Gaupro!
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-80 md:w-96 h-[60vh] max-h-[500px] rounded-lg shadow-xl p-0 border-0 flex"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Card className="flex flex-col w-full border-0">
          <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4 rounded-t-lg">
            <CardTitle className="text-lg font-semibold">Chat with Gaupro</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 hover:bg-primary/80">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-end gap-2 ${
                      message.sender === 'bot' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                        message.sender === 'bot'
                          ? 'bg-secondary'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                 {isLoading && (
                  <div className="flex items-end gap-2 justify-start">
                    <div className="max-w-xs rounded-lg px-3 py-2 text-sm bg-secondary flex items-center">
                       <Loader2 className="h-4 w-4 animate-spin mr-2"/>
                       Thinking...
                    </div>
                  </div>
                )}
                {messages.length === 1 && ( // Only show topics initially
                     <div className="space-y-2 pt-2">
                        {topicOptions.map((topic, i) => (
                            <Button
                                key={i}
                                variant="outline"
                                className="w-full justify-start h-auto py-2"
                                onClick={(e) => handleSendMessage(e, topic.text)}
                            >
                                {topic.icon}
                                <span className="ml-2">{topic.text}</span>
                            </Button>
                        ))}
                    </div>
                )}
              </div>
            </ScrollArea>
             <div className="text-center text-xs text-muted-foreground p-2 border-t">
                Our team usually replies in under 5 minutes.
            </div>
            <div className="p-3 border-t bg-background">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                  onFocus={() => setIsOpen(true)}
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={!newMessage.trim() || isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
