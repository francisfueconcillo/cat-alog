import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from './ui/utils'
import { Button } from './ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover'

import Cat from '../context/types/Cat'

type Props = {
  breeds: Cat[],
  selectHandler: (catId: string) => void,
}

function SelectBreed({ breeds, selectHandler }: Props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  const itemSelectHandler = (catId: string) => {
    if (catId !== '') {
      setValue(catId);
      selectHandler(catId);
    }
    setOpen(false);
  }

  return (
    <div className="flex items-center p-4">
      <p className="pr-4">Breed: </p>
      <Popover open={open} onOpenChange={setOpen}>

        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? breeds.find((breed) => breed.value === value)?.label
              : "Select Breed..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search Cat Breeds..." />
            <CommandEmpty>No data found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {breeds.map((breed) => {
                  return <CommandItem
                    key={breed.value}
                    value={breed.value}
                    onSelect={itemSelectHandler}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === breed.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {breed.label}
                  </CommandItem>
                })}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>

      </Popover>
      


    </div>

    
  )
}


export default SelectBreed;