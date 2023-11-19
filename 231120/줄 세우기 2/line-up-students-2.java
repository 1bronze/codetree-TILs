import java.io.*;
import java.util.*;

public class Main {
    public static class Student {
        int index;
        int height;
        int weight;

        public Student(int index, int height, int weight) {
            this.index = index;
            this.height = height;
            this.weight = weight;
        }

        @Override
        public String toString() {
            return String.format("%d %d %d", height, weight, index);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Student> students = new ArrayList<>();

        int n = Integer.parseInt(br.readLine());
        for (int i = 1; i <= n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int height = Integer.parseInt(st.nextToken());
            int weight = Integer.parseInt(st.nextToken());
            students.add(new Student(i, height, weight));
        }

        Collections.sort(students, (s1, s2) -> {
            if (s1.height != s2.height) {
                return s1.height - s2.height;
            } else {
                return s2.weight - s1.weight;
            }
        });

        for (Student student : students) {
            System.out.println(student.toString());
        }
    }
}