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
            return name + " " + height + " " + weight;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Person> people = new ArrayList<>();

        int n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            people.add(new Person(st.nextToken(), Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())));
        }

        Collections.sort(people, (o1, o2) -> { return o1.height - o2.height; });

        for (Person person : people) {
            System.out.println(person.toString());
        }
    }
}