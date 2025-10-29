
'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

interface RequestQuoteDialogProps {
  children?: React.ReactNode;
  service?: string;
  initialStep?: number;
  initialData?: any;
}

export function RequestQuoteDialog({
  children,
  service,
  initialStep = 0,
  initialData = {},
}: RequestQuoteDialogProps) {
  const router = useRouter();

  // This component will now just navigate to the dedicated page.
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (service) {
      queryParams.set('service', service);
    }
    // You could add other initial data to query params if needed
    
    router.push(`/post-request?${queryParams.toString()}`);
  };

  if (!children) {
    return null;
  }

  // We clone the child to attach our own onClick handler
  return React.cloneElement(children as React.ReactElement, {
    onClick: handleClick,
  });
}
