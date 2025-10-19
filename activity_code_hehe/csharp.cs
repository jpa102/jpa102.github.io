using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabExerJPA
{
	class Program
	{
		static void Main(string[] args)
		{
			/*
				youtube studio: likes & dislikes
			*/
			int likeCount = 586;
			int dislikeCount = 19;
			
			/*
				code: get the average rating
			*/
			int oneStar = dislikeCount * 1;
			int fiveStar = likeCount * 5;
			int totalVotes = (dislikeCount + likeCount);
			int totalStars = (oneStar + fiveStar);
			double averageRating = (double)totalStars / totalVotes;
			string roundedRating = averageRating.ToString("F2");
			
			/*
				code: get the percentage
			*/
			
			
			/*
				internal "debug" setting
			*/
			bool DisplayOtherResults = false;
			
			
			
			/*
				================================
				        print the results
				================================
			*/
			Console.WriteLine("Like counts: " + likeCount + "\nDislike counts: " + dislikeCount + "\n\nAverage rating: " + averageRating); // one liner print
			Console.WriteLine("Rounded rating: " + roundedRating);
			
			if (DisplayOtherResults == true)
			{
				Console.WriteLine("\n"); // new line
				Console.WriteLine("oneStar: " + oneStar + "\nfiveStar: " + fiveStar + "\ntotalVotes: " + totalVotes + "\ntotalStars: " + totalStars + "\naverageRating: " + averageRating + "\nroundedRating: " + roundedRating); // one liner print
			}
		}
	}
}
