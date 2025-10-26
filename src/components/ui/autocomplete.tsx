
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
}

export function Autocomplete({
  options,
  value,
  onValueChange,
  placeholder,
  inputClassName,
}: AutocompleteProps) {
  const [open, setOpen] = React.useState(false);
  
  const selectedOption = React.useMemo(() => 
    options.find(option => option.value === value), 
    [options, value]
  );
  
  const [inputValue, setInputValue] = React.useState(selectedOption?.label || '');

  React.useEffect(() => {
    setInputValue(selectedOption?.label || (open ? inputValue : ''));
  }, [selectedOption, open]);
  
  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? '' : currentValue;
    onValueChange(newValue);
    setOpen(false);
    const selected = options.find(option => option.value === newValue);
    setInputValue(selected?.label || '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    if (!open) {
      setOpen(true);
    }
    // Clear the main value if input is cleared
    if (newInputValue === '') {
      onValueChange('');
    }
  };

  const filteredOptions = inputValue
    ? options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    : options;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className={cn(
            'w-full bg-transparent border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0',
            inputClassName
          )}
          role="combobox"
          aria-expanded={open}
        />
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
