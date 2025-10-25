'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MessageSquare, Send, X, KeyRound, CreditCard, User, FileQuestion, HelpCircle } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Input } from '../ui/input';

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent, text?: string) => {
    e.preventDefault();
    const messageText = (text || newMessage).trim();
    if (messageText === '') return;

    if (messageText === 'Close this chat') {
        setIsOpen(false);
        return;
    }

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: messageText,
    };
    
    // Simulate bot response
    const botResponse = {
        id: messages.length + 2,
        sender: 'bot',
        text: 'A support team member will join shortly — please stay on this page.'
    }

    setMessages([...messages, userMessage, botResponse]);
    setNewMessage('');
  };

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
        className="w-80 md:w-96 rounded-lg shadow-xl p-0 border-0"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Card className="flex flex-col h-[70vh] max-h-[700px] border-0">
          <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4 rounded-t-lg">
            <CardTitle className="text-lg font-semibold">Gaupro Support</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 hover:bg-primary/80">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col p-0">
            <ScrollArea className="flex-grow p-4">
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
                />
                <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
               <p className="text-xs text-muted-foreground text-center mt-2 px-4">
                    💡 Need urgent help after hours? Send us a message — we’ll reply first thing the next business day.
                </p>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
