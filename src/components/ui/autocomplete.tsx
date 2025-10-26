
'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

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
import { Button } from './button';

interface AutocompleteOption {
  value: string;
  label: string;
}

interface AutocompleteProps {
  options: AutocompleteOption[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  inputClassName?: string;
  isDialog?: boolean;
}

export function Autocomplete({
  options,
  value,
  onValueChange,
  placeholder,
  inputClassName,
  isDialog = false,
}: AutocompleteProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);

  React.useEffect(() => {
     const currentOption = options.find(option => option.value === value);
     setInputValue(currentOption ? currentOption.label : value);
  }, [value, options]);

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? '' : currentValue;
    onValueChange(newValue);
    setOpen(false);
  };
  
  const filteredOptions = inputValue 
    ? options.filter(option => 
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    : options;

  const TriggerComponent = isDialog ? Input : Button;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {isDialog ? (
             <Input
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    if(!open) setOpen(true);
                }}
                placeholder={placeholder}
                className={cn(
                    'w-full bg-background border-input focus-visible:ring-2 focus-visible:ring-ring',
                    inputClassName
                )}
                onFocus={() => setOpen(true)}
            />
        ) : (
             <TriggerComponent
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn("w-full justify-between", !value && "text-muted-foreground", inputClassName)}
              >
                {value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </TriggerComponent>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
        <Command>
            <CommandInput 
              placeholder="Search services..."
              value={inputValue}
              onValueChange={setInputValue}
            />
          <CommandList>
             <CommandEmpty>No results found.</CommandEmpty>
            {filteredOptions.length > 0 && (
                <CommandGroup>
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => handleSelect(option.value)}
                  >
                     <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === option.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
