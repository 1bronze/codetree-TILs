#include<iostream>

using namespace std;


int arr[100][100];
int N, M, Q, r;
char d;

void shiftLeft(int r) {
  int lastElement = arr[r - 1][M - 1];

  for (int i = M - 1; i > 0; i--) {
    arr[r - 1][i] = arr[r - 1][i - 1];
  }
  arr[r - 1][0] = lastElement;
} //r번째 줄 오른쪽으로 shift

void shiftRight(int r){
  int firstElement = arr[r - 1][0];

  for (int i = 1; i < M; i++) { // 여기 i 시작을 0에서 1로 바꿔야 할듯?
    arr[r - 1][i - 1] = arr[r - 1][i];
  }
  arr[r - 1][M - 1] = firstElement;
} //r번째 줄 왼쪽으로 shift

bool upexist(int a) {
  for (int i = 0; i < M; i++) {
      if (arr[a-1][i] == arr[a - 2][i]) {
        return true;
      }
    
  }
  return false;
}

bool downexist(int a){
  for (int i = 0; i < M; i++) {
      if (arr[a-1][i] == arr[a][i]) {
        return true;
      }
  }
  return false;
}

int main(){
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> N >> M >> Q;
  for (int i = 0; i < N; i++){
    for (int j = 0; j < M; j++){
      cin >> arr[i][j];
    }
  }

  for (int i = 0; i < Q; i++){
    cin >> r >> d;
    int x = r;
    char dir = d;
    if (dir == 'L') {
      shiftLeft(x);
      while(x > 1){
        if(upexist(x)) {
          x--;
          if (dir == 'L') {
            shiftRight(x);
            dir = 'R';
          } else {
            shiftLeft(x);
            dir = 'L';
          }
        }
        else{
          break;
        }
      }

      dir = d;
      x = r;
      while (x < N) {
        if (downexist(x)) {
          x++;
          if (dir == 'L') {
            shiftRight(x);
            dir = 'R';
          } else {
            shiftLeft(x);
            dir = 'L';
          }
        } else {
          break;
        }
      }
    }

    else if (dir == 'R') {
      shiftRight(x);
      while(x > 1){
        if(upexist(x)) {
          x--;
          if (dir == 'L') {
            shiftRight(x);
            dir = 'R';
          } else {
            shiftLeft(x);
            dir = 'L';
          }
        }
        else{
          break;
        }
      }
      dir = d;
      x = r;
      while (x < N) {
        if(downexist(x)) {
          x++;
          if (dir == 'L') {
            shiftRight(x);
            dir = 'R';
          } else {
            shiftLeft(x);
            dir = 'L';
          }
        }
        else{
          break;
        }
      }
    }
  }

  for (int i = 0; i < N; i++){
    for (int j = 0; j < M; j++){
      cout << arr[i][j] << " ";
    }
    cout << '\n';
  }
}