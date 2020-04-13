import { IContact } from '../types';

export const defaultValue: IContact[] = [
  { id: 'id-1', name: 'Rosie Simpson', number: '380444591256' },
  { id: 'id-2', name: 'Rosie Simpson', number: '380444591256' },
  { id: 'id-3', name: 'Hermione Kline', number: '380444438912' },
  { id: 'id-4', name: 'Hermione Kline', number: '380444438912' },
  { id: 'id-5', name: 'Rosie Simpson', number: '380444591256' },
  { id: 'id-6', name: 'Rosie Simpson', number: '380444591256' },
  { id: 'id-7', name: 'Hermione Kline', number: '380444438912' },
  { id: 'id-8', name: 'Hermione Kline', number: '380444438912' },
];

export const filterTasks = (contacts: IContact[], filter: string) => {
  return contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });
};

export const detectDuplicate = (value: string, contacts: IContact[]): boolean => {
  const isDuplicate = contacts.some(item => item.number === value);
  return isDuplicate;
}
