// Source: https://www.youtube.com/watch?v=TBCx-P76dVw&list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq
import React, { useState, useRef, useContext, createContext, useReducer, useCallback, useMemo, useEffect, useLayoutEffect } from 'react';


// ------- useState
const [value1, setValue1] = useState(0);
const [value2, setValue2] = useState<number | undefined>(undefined);
const [value3, setValue3] = useState<Array<number>>([]);

interface IUser {
  name: string;
  age?: number;
}
const [value4, setValue4] = useState<IUser>({ name: 'Sasha' });



// ------- useRef
const ref1 = useRef<HTMLElement>(null!); // зробить пропертю current тільки для читання і дозволити керувати тільки Реакту
const ref2 = useRef<HTMLElement | null>(null); // дозволить модифіковувати пропертю current і креувати зможе будь-хто



// ------- useContext
interface ITheme {
  backgroundColor: string;
  color: string;
}
const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white',
});

const themeContext = useContext<ITheme>(ThemeContext);



// ------- useReducer
interface State { count: number };
type Action = { type: 'increment' | 'decrement' };

const counterReducer = ({ count }: State, { type }: Action) => {
  switch (type) {
    case 'increment': return { count: count + 1 };
    case 'decrement': return { count: count - 1 };
    default: return { count: 0 };
  }
};

const [state, dispatch] = useReducer(counterReducer, { count: 0 });

dispatch({ type: 'increment' });
dispatch({ type: 'decrement' });



// ------- useCallback, useMemo
const sum = (a: number, b: number): number => a + b;
const a = 1;
const b = 2;

const memoizedCallback = useCallback(() => sum(a, b), [a, b]);

const memoizedValue = useMemo(() => sum(a, b), [a, b]);



// ------- useEffect, useLayoutEffect
const subscribe = (args: any) => {};
const unsubscribe = (args: any) => {};
const options = '2';
useEffect(() => {
  const subscriber = subscribe(options);
  return () => {
    unsubscribe(subscriber);
  };
}, [ options ]);
