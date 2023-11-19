import java.io.*;
import java.util.*;

public class Main {
    public static class Student {
        String name;
        int firstScore;
        int secondScore;
        int thirdScore;

        public Student(String name, int firstScore, int secondScore, int thirdScore) {
            this.name = name;
            this.firstScore = firstScore;
            this.secondScore = secondScore;
            this.thirdScore = thirdScore;
        }

        @Override
        public String toString() {
            return String.format("%s %d %d %d", name, firstScore, secondScore, thirdScore);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Student> students = new ArrayList<>();

        int n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            String name = st.nextToken();
            int firstScore = Integer.parseInt(st.nextToken());
            int secondScore = Integer.parseInt(st.nextToken());
            int thirdScore = Integer.parseInt(st.nextToken());

            Student student = new Student(name, firstScore, secondScore, thirdScore);
            students.add(student);
        }

        Collections.sort(students, (s1, s2) -> {
            int s1Score = s1.firstScore + s1.secondScore + s1.thirdScore;
            int s2Score = s2.firstScore + s2.secondScore + s2.thirdScore;
            return s1Score - s2Score;
        });

        for (int i = 0; i < n; i++) {
            Student student = students.get(i);
            System.out.println(student.toString());
        }
    }
}