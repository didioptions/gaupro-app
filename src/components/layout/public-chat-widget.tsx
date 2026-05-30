'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MessageSquare, Send, X, FileText, Briefcase, MessageCircle as MessageCircleIcon, Loader2, Info, ThumbsUp, ThumbsDown } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Input } from '../ui/input';
import { usePathname } from 'next/navigation';
import { getSupportResponse } from '@/ai/flows/support-chat-flow';
import { cn } from '@/lib/utils';

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
    { icon: <Info className="h-5 w-5" />, text: 'Something else' },
    { icon: <X className="h-5 w-5" />, text: 'Close Chat' },
];

export default function PublicChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showClosingScreen, setShowClosingScreen] = useState(false);
  const [rating, setRating] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Reset chat when opening
      setMessages(initialMessages);
      setShowClosingScreen(false);
      setRating(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.parentElement?.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  // Don't render the widget on pro-specific pages or on the server
  if (pathname.startsWith('/pro/') || !isClient) {
    return null;
  }

  const handleSendMessage = async (e: React.FormEvent, text?: string) => {
    if (e) e.preventDefault();
    const messageText = (text || newMessage).trim();
    if (messageText === '') return;
    
    if (messageText === 'Close Chat') {
      setShowClosingScreen(true);
      return;
    }


    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: messageText,
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await getSupportResponse(messageText);
      const botMessage: Message = {
        id: messages.length + 2,
        sender: 'bot',
        text: aiResponse,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('AI response error:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        sender: 'bot',
        text: "Sorry, I'm having a little trouble connecting. Please try again in a moment.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleClose = () => {
    setIsOpen(false);
  }

  const renderClosingScreen = () => (
    <div className="flex flex-col items-center justify-center text-center p-6 h-full">
        <h3 className="text-lg font-semibold">Rate your experience</h3>
        <div className="flex gap-4 my-4">
            <Button variant={rating === -1 ? "default" : "outline"} size="icon" onClick={() => setRating(-1)}>
                <ThumbsDown className="h-5 w-5" />
            </Button>
            <Button variant={rating === 1 ? "default" : "outline"} size="icon" onClick={() => setRating(1)}>
                <ThumbsUp className="h-5 w-5" />
            </Button>
        </div>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
            ✅ Thank you for chatting with Gaupro!
            We’re always here to help you find the right professional — or to help you grow your business with Gaupro.
        </p>
        <Button onClick={handleClose} className="mt-6 w-full">Done</Button>
    </div>
  );


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
        className="w-80 md:w-96 h-[70vh] max-h-[500px] rounded-lg shadow-xl p-0 border-0 flex flex-col"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4 rounded-t-lg">
          <CardTitle className="text-lg font-semibold">Chat with Gaupro</CardTitle>
          <Button variant="ghost" size="icon" onClick={() => setShowClosingScreen(true)} className="h-8 w-8 hover:bg-primary/80">
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        {showClosingScreen ? renderClosingScreen() : (
            <>
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
                          className={cn(
                            'max-w-xs rounded-lg px-3 py-2 text-sm whitespace-pre-wrap',
                            message.sender === 'bot'
                              ? 'bg-secondary'
                              : 'bg-primary text-primary-foreground'
                          )}
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
            </>
        )}
      </PopoverContent>
    </Popover>
  );
}
