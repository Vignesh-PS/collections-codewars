package javaPractice;

public class Tortoise {

	
	public static int[] race(int v1, int v2, int g) {

		if(v1 >= v2) return null;
		
		int seconds = (g*3600)/(v2-v1);
		
		return new int[]{seconds/3600,(seconds % 3600)/60,  seconds % 60};
    }
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int a[] = race(720, 850, 70);
		System.out.println(a.toString());
	}

}
