import java.io.*;
import java.util.*;

public class Main {
    public static class Person {
        String name;
        int height;
        int weight;

        public Person(String name, int height, int weight) {
            this.name = name;
            this.height = height;
            this.weight = weight;
        }

        @Override
        public String toString() {
            return String.format("%s %d %d", name, height, weight);
        }
    }


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Person> people = new ArrayList<>();

        int n = Integer.parseInt(br.readLine());

        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            String name = st.nextToken();
            int height = Integer.parseInt(st.nextToken());
            int weight = Integer.parseInt(st.nextToken());

            Person person = new Person(name, height, weight);
            people.add(person);
        }

        Collections.sort(people, (p1, p2) -> {
            if (p1.height != p2.height) {
                return p1.height - p2.height;
            } else {
                return p2.weight - p1.weight;
            }
        });

        for (Person person : people) {
            System.out.println(person.toString());
        }
    }
}