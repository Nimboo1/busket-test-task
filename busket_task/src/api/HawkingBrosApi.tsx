import { IHeader, IProduct } from '../interfaces/Interfaces';

const baseUrl = 'http://localhost:8080/api';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function createBusket(count: number): Promise<boolean> {
  try {
    const response = await fetch(`${baseUrl}/Admin/create?value=${count}`, {
      method: 'POST',
      headers,
    });
    if (!response.ok) throw new Error();

    const result: boolean = await response.json();

    return result;
  } catch {
    throw new Error();
  }
}

export async function getHeader(): Promise<IHeader> {
  try {
    const response = await fetch(`${baseUrl}/ShoppingCart/header`, {
      method: 'GET',
      headers,
    });
    if (!response.ok) throw new Error();

    const result: IHeader = await response.json();

    return result;
  } catch {
    throw new Error();
  }
}

export async function getProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch(`${baseUrl}/ShoppingCart/products`, {
      method: 'GET',
      headers,
    });
    if (!response.ok) throw new Error();

    const result: IProduct[] = await response.json();

    return result;
  } catch {
    throw new Error();
  }
}

export async function getSummary(): Promise<number> {
  try {
    const response = await fetch(`${baseUrl}/ShoppingCart/baskedsummary`, {
      method: 'GET',
      headers,
    });
    if (!response.ok) throw new Error();

    const result = await response.json();

    return result.Total;
  } catch {
    throw new Error();
  }
}

export async function clearBusket(): Promise<string> {
  try {
    const response = await fetch(`${baseUrl}/ShoppingCart/products`, {
      method: 'DELETE',
      headers,
    });
    if (!response.ok) throw new Error();

    const result = await response.json();

    return result.name;
  } catch {
    throw new Error();
  }
}
