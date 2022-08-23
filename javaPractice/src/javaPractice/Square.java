package javaPractice;

class Square {
	
	private boolean isSquare(int num) {
		double a =  Math.sqrt(num);
		
		System.out.println(a +" %%%  " + a % 1);
		
		if(a == (float)a) {
			return true;
		}else {
			return false;
		}
	}
	
	private boolean trueFunction() {
		System.out.println("its true function");
		return true;
	}
	
	private boolean falseFunction() {
		System.out.println("its false function");
		return false;
	}
	
	public static void main(String[] args) {
		Square s = new Square();
		//System.out.println(s.isSquare(24));
		int a = 5, b = 5;
		
		boolean c = (a==b) ? s.trueFunction() : s.falseFunction();
		
		System.out.println(c);
	}
}
