'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ScrollArea } from '../ui/scroll-area';

const initialMessages = [
  {
    id: 1,
    sender: 'customer',
    text: 'Hi there! I saw your profile and I have a question about my plumbing issue.',
    timestamp: '10:00 AM',
  },
  {
    id: 2,
    sender: 'pro',
    text: 'Hello! I can certainly help with that. What seems to be the problem?',
    timestamp: '10:01 AM',
  },
  {
    id: 3,
    sender: 'customer',
    text: 'My kitchen sink is completely blocked. I\'ve tried everything.',
    timestamp: '10:02 AM',
  },
];

export function ChatWidget() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      sender: 'pro',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <Card className="flex flex-col h-[500px]">
      <CardHeader className="flex flex-row items-center gap-4">
        <MessageSquare className="h-6 w-6 text-primary" />
        <CardTitle>Live Chat with Customer</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-0">
        <ScrollArea className="flex-grow p-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-3 ${
                  message.sender === 'pro' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'customer' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-xs rounded-lg px-4 py-2 ${
                    message.sender === 'pro'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'pro' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>{message.timestamp}</p>
                </div>
                {message.sender === 'pro' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t bg-background">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
