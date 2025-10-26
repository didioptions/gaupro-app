
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MessageSquare, Send, X, KeyRound, CreditCard, User, FileQuestion, HelpCircle, Loader2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Input } from '../ui/input';
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
    text: '👋 Hi there! Welcome to Gaupro Support. How can we help you today?',
  },
];

const topicOptions = [
    { icon: <KeyRound className="h-5 w-5" />, text: 'Account or login issues' },
    { icon: <CreditCard className="h-5 w-5" />, text: 'Credits & payments' },
    { icon: <User className="h-5 w-5" />, text: 'Leads or quote requests' },
    { icon: <FileQuestion className="h-5 w-5" />, text: 'Profile or verification help' },
    { icon: <HelpCircle className="h-5 w-5" />, text: 'Other questions' },
];

const quickActions = [
    "Check my verification status",
    "Report a lead issue",
    "Ask about my credits",
    "Update my profile info",
    "Close this chat",
];

export function SupportChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showClosingScreen, setShowClosingScreen] = useState(false);
  const [rating, setRating] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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

  const handleSendMessage = async (e: React.FormEvent, text?: string) => {
    e.preventDefault();
    const messageText = (text || newMessage).trim();
    if (messageText === '') return;

    if (messageText === 'Close this chat') {
        setShowClosingScreen(true);
        return;
    }

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
            ✅ Thanks for chatting with Gaupro Support!
            You can review your chat history anytime in this window.
            If your issue isn’t resolved, email us at support@gaupro.co.za
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
          Need help? Chat with Gaupro Support
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-80 md:w-96 h-[70vh] max-h-[600px] rounded-lg shadow-xl p-0 border-0 flex flex-col"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
          <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4 rounded-t-lg">
            <CardTitle className="text-lg font-semibold">Gaupro Support</CardTitle>
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
                            <p className="text-sm text-muted-foreground">Choose a topic below or just type your message:</p>
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
                 <div className="p-3 border-t bg-background space-y-2">
                     <p className="text-xs text-muted-foreground">Quick Actions</p>
                     <div className="flex flex-wrap gap-2">
                        {quickActions.map(action => (
                             <Button key={action} variant="outline" size="sm" className="text-xs h-auto py-1" onClick={(e) => handleSendMessage(e, action)}>{action}</Button>
                        ))}
                     </div>
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
                   <p className="text-xs text-muted-foreground text-center mt-2 px-4">
                        💡 Need urgent help after hours? Send us a message — we’ll reply first thing the next business day.
                    </p>
                </div>
              </CardContent>
            </>
          )}
      </PopoverContent>
    </Popover>
  );
}
