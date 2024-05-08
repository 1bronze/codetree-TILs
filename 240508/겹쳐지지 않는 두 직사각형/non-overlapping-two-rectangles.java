import java.util.*;

public class Main {
    static int n, m;
    static int ans = Integer.MIN_VALUE;
    static int[][] map;

    public static void main(String[] args) {
        // 여기에 코드를 작성해주세요.
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        map = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                map[i][j] = sc.nextInt();
            }
        }

        // i, j로 1번 직사각형 왼쪽 상단 꼭지점 선택
        // k, l로 2번 직사각형 왼쪽 상단 꼭지점 선택
        // 나머지로 각각의 가로 세로 설정
        for (int x1 = 0; x1 < n; x1++) {
            for (int y1 = 0; y1 < m; y1++) {
                for (int x2 = 0; x2 < n; x2++) {
                    for (int y2 = 0; y2 < m; y2++) {
                        for (int row1 = 1; row1 < n; row1++) {
                            for (int col1 = 1; col1 < m; col1++) {
                                for (int row2 = 1; row2 < n; row2++) {
                                    for (int col2 = 1; col2 < m; col2++) {
                                        ans = Math.max(ans, getScore(x1, y1, x2, y2, row1, col1, row2, col2));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        System.out.print(ans);
    }

    static int getScore(int x1, int y1, int x2, int y2, int row1, int col1, int row2, int col2) {
        // 겹치면 바로 return
        if (isOverlap(x1, y1, x2, y2, row1, col1, row2, col2))
            return Integer.MIN_VALUE;

        int sum1 = 0;
        int sum2 = 0;
        for (int a = x1; a < x1 + row1; a++) {
            for (int b = y1; b < y1 + col1; b++) {
                if (!inRange(a, b)) {
                    return Integer.MIN_VALUE;
                }
                
                sum1 += map[a][b];
            }
        }

        for (int c = x2; c < x2 + row2; c++) {
            for (int d = y2; d < y2 + col2; d++) {
                if (!inRange(c, d)) {
                    return Integer.MIN_VALUE;
                }

                sum2 += map[c][d];
            }
        }

        return sum1 + sum2;
    }

    static boolean inRange(int x, int y) {
        return 0 <= x && x < n && 0 <= y && y < m;
    }

    // 1 left top x1 y1
    // 1 right bot x1 + row1 y1 + col1
    // 2 left top x2 y2
    // 2 right bot x2 + row2 y2 + col2
    static boolean isOverlap(int x1, int y1, int x2, int y2, int row1, int col1, int row2, int col2) {
        return (x1 <= x2 && x2 < x1 + row1 && y1 <= y2 && y2 < y1 + col1) // 왼쪽 위
            || (x1 <= x2 && x2 < x1 + row1 && y1 <= y2 + col2 - 1 && y2 + col2 - 1 < y1 + col1) // 오른쪽 위
            || (x1 <= x2 + row2 - 1 && x2 + row2 - 1 < x1 + row1 && y1 <= y2 && y2 < y1 + col1) // 왼쪽 아래
            || (x1 <= x2 + row2 - 1 && x2 + row2 - 1 < x1 + row1 && y1 <= y2 + col2 - 1 && y2 + col2 - 1 < y1 + col1); // 오른쪽 아래
    }
}