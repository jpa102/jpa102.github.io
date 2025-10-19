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
			String numone = Console.ReadLine();
			
			Console.WriteLine("\n"); // new line
			
			Console.WriteLine("[2] enter a number: ");
			String numtwo = Console.ReadLine();
			
			int numone_fin = Convert.ToInt32(numone);
			int numtwo_fin = Convert.ToInt32(numtwo);
			
			int total = numone_fin + numtwo_fin;
			
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
