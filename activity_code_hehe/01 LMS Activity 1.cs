using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdemCsharp
{
	class MyProgramCode
	{
		static void Main(string[] args)
		{
			const int OrigNum = 12;
			
			Console.WriteLine("[1] enter a number: ");
			int numone = Console.ReadLine();
			
			Console.WriteLine("\n"); // new line
			
			Console.WriteLine("[2] enter a number: ");
			int numtwo = Console.ReadLine();
			
			int total = numone + numtwo;
			
			if (total < OrigNum)
			{
				Console.WriteLine("the entered values don't match.\n\nExpected value: " + OrigNum + "\nTotal values: " + total);
			}
			else
			{
				Console.WriteLine("the entered values match!\n\nExpected value: " + OrigNum + "\nTotal values: " + total);
			}
		}
	}
}


