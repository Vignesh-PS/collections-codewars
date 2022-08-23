package javaPractice;

class Qspiders
{
	void behave_decently()
	{
		System.out.println("very Decent");	

	}
}

class Student extends Qspiders
{
	void behave_as_a_hero_or_heroine()
	{
		System.out.println("hero/heroine");			
	}
	public static void main(String[] args) 
	{
		System.out.println("Main method started");
		Student s1 = new Student(); 

		s1.behave_as_a_hero_or_heroine();

		s1.behave_decently();

	}
}
