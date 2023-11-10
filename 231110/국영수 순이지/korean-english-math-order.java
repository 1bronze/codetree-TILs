import java.io.*;
import java.util.*;

public class Main {
    public static class Person {
        String name;
        int korScore;
        int engScore;
        int mathScore;

        public Person(String name, int korScore, int engScore, int mathScore) {
            this.name = name;
            this.korScore = korScore;
            this.engScore = engScore;
            this.mathScore = mathScore;
        }

        @Override
        public String toString() {
            return name + " " + korScore + " " + engScore + " " + mathScore;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Person> people = new ArrayList<>();

        int n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            people.add(new Person(st.nextToken(), Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())));
        }

        Collections.sort(people, (o1, o2) -> { 
            if (o1.korScore != o2.korScore)
                return o2.korScore - o1.korScore;
            if (o1.engScore != o2.engScore)
                return o2.engScore - o1.engScore;
            return o2.mathScore - o1.mathScore;
        });

        for (Person person : people) {
            System.out.println(person.toString());
        }
    }
}