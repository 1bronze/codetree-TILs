import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PriorityQueue<Integer> minHeap = new PriorityQueue(); // 오름차순 -> 더 큰 수 넣기
        PriorityQueue<Integer> maxHeap = new PriorityQueue(Collections.reverseOrder()); // 내림차순 -> 더 작은 수 넣기

        minHeap.add(Integer.MAX_VALUE);
        maxHeap.add(Integer.MIN_VALUE);

        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            int target = Integer.parseInt(st.nextToken());
            int minVal = maxHeap.peek();
            int maxVal = minHeap.peek();

            if (target < minVal) 
                maxHeap.add(target);
            else
                minHeap.add(target);

            if (minHeap.size() - maxHeap.size() > 1)
                maxHeap.add(minHeap.poll());

            if (i % 2 == 0) {
                System.out.print(minHeap.peek() + " ");
            }
        }
    }
}