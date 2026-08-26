'use client';

import * as React from 'react';
import { Check, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from './input';

interface AutocompleteOption {
  value: string;
  label: string;
}

interface AutocompleteProps {
  id?: string;
  options: AutocompleteOption[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  inputClassName?: string;
}

export function Autocomplete({
  id,
  options = [],
  value,
  onValueChange,
  placeholder,
  inputClassName,
}: AutocompleteProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  // Defensive check to ensure options is always an array
  const safeOptions = React.useMemo(() => (Array.isArray(options) ? options : []), [options]);

  const selectedOption = React.useMemo(
    () => safeOptions.find((option) => option.value === value),
    [safeOptions, value]
  );

  React.useEffect(() => {
    setInputValue(selectedOption?.label || '');
  }, [selectedOption]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id={id}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (!open) {
                setOpen(true);
              }
            }}
            onClick={() => setOpen(true)}
            placeholder={placeholder}
            className={cn("pl-10", inputClassName)}
            autoComplete="off"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" onOpenAutoFocus={(e: Event) => e.preventDefault()}>
        <Command
          filter={(value, search) => {
            if (value.toLowerCase().includes(search.toLowerCase())) return 1;
            return 0;
          }}
        >
          <CommandInput
            value={inputValue}
            onValueChange={setInputValue}
            placeholder="Search..."
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {safeOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onValueChange(option.value);
                    setInputValue(option.label);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
