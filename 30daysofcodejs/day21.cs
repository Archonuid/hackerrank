/**
*
* What is the Generic?
* That is being able to create a component that can work over a variety of types rather than a single one.
* JavaScript is a dynamically typed language and it doesn't have any generics. So we can write a normal function or method.
* Also, you can write in languages like TypeScript, Java, C#.
* It's a creation code in C#
*
**/

using System;

class Printer
{

	/**
	*    Name: PrintArray
	*    Print each element of the generic array on a new line. Do not return anything.
	*    @param A generic array
	**/
    // Write your code here
    static void PrintArray<T>(T[] array){
    foreach(T i in array)
        Console.WriteLine(i);
}


    static void Main(string[] args)
	{
		int n = Convert.ToInt32(Console.ReadLine());
		int[] intArray = new int[n];
		for (int i = 0; i < n; i++)
		{
			intArray[i] = Convert.ToInt32(Console.ReadLine());
		}
		
		n = Convert.ToInt32(Console.ReadLine());
		string[] stringArray = new string[n];
		for (int i = 0; i < n; i++)
		{
			stringArray[i] = Console.ReadLine();
		}
		
		PrintArray<Int32>(intArray);
		PrintArray<String>(stringArray);
	}
}