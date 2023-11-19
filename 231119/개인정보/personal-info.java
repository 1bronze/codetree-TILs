import java.io.*;
import java.util.*;

public class Main {
    public static class Person {
        String name;
        int height;
        double weight;

        public Person(String name, int height, double weight) {
            this.name = name;
            this.height = height;
            this.weight = weight;
        }

        @Override
        public String toString() {
            return String.format("%s %d %.1f", name, height, weight);
        }
    }


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Person> people = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            String name = st.nextToken();
            int height = Integer.parseInt(st.nextToken());
            double weight = Double.parseDouble(st.nextToken());

            Person person = new Person(name, height, weight);
            people.add(person);
        }

        Collections.sort(people, (p1, p2) -> p1.name.compareTo(p2.name));

        System.out.println("name");
        for (Person person : people) {
            System.out.println(person.toString());
        }

        System.out.println();
        Collections.sort(people, (p1, p2) -> p2.height - p1.height);

        System.out.println("height");
        for (Person person : people) {
            System.out.println(person.toString());
        }
    }
}