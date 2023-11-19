import java.io.*;
import java.util.*;

public class Main {
    public static class Coordinate {
        int index;
        int x;
        int y;

        public Coordinate(int index, int x, int y) {
            this.index = index;
            this.x = x;
            this.y = y;
        }

        public int getDistanceFromOrigin() {
            return Math.abs(x) + Math.abs(y);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Coordinate> coordinates = new ArrayList<>();
        
        int n = Integer.parseInt(br.readLine());
        for (int i = 1; i <= n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            coordinates.add(new Coordinate(i, x, y));
        }

        Collections.sort(coordinates, (c1, c2) -> {
            int c1Dist = c1.getDistanceFromOrigin();
            int c2Dist = c2.getDistanceFromOrigin();
            if (c1Dist != c2Dist) {
                return c1Dist - c2Dist;
            } else {
                return c1.index - c2.index;
            }
        });

        for (Coordinate coordinate : coordinates) {
            System.out.println(coordinate.index);
        }
    }
}