import java.io.BufferedReader;
import java.io.InputStreamReader;
class h
{
    public static void main(String []args)throws Exception{
        InputStreamReader r= new InputStreamReader(System.in);
        BufferedReader ob= new BufferedReader(r);
        System.out.println("Enter your name:");
        String sent=ob.readLine();
        System.out.println("Hello World!");
        System.out.println("Welcome "+sent);
    }
}