const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim());
let testCase_cnt =+input[0];
let tmp = input.slice(1);
const tcs =[];

class TestCase {
    constructor(n,m,marbles){
        this.n =n;
        this.m =m;
        this.marbles = marbles;
    }
}

while(testCase_cnt>0){
    testCase_cnt--;
const [n,m] = tmp[0].split(" ").map(Number);
const dm = {'U':0,'R':1,'D':2,'L':3};
const marbles = tmp.slice(1,1+m).map(v=>v.trim().split(" ")).map(c=>[+c[0]-1,+c[1]-1,dm[c[2].trim()]]);
tcs.push(new TestCase(n,m,marbles));
tmp = tmp.slice(1+m);
}

const ans =[];


function newPos(n,x,y,d){
const dx = [-1,0,1,0];
const dy = [0,1,0,-1];
const [nx,ny]= [x+dx[d],y+dy[d]];

if(nx>=0&&nx<n&&ny>=0&&ny<n)return [nx,ny,d];
return [x,y,(d+2)%4]
}

for(let tc of tcs){
    const count = Array.from(Array(tc.n),(a)=>Array(tc.n).fill(0));
    tc.marbles.forEach(([x,y])=>count[x][y]++);
    let cnt = tc.n*2
    while(cnt>0&&tc.marbles.length>1){
        // count.forEach(v=>console.log(v.join("")));
        // console.log('-------------------------')
        cnt--;
        let new_marbles = [];
        for(let marble of tc.marbles){
            const [nx,ny,nd] =newPos(tc.n,...marble);
            count[nx][ny]++;
            count[marble[0]][marble[1]]--;
            new_marbles.push([nx,ny,nd]);
        }
        count.forEach((v,i)=>v.forEach((c,j)=>{
            if(c>1){
                count[i][j]=0;
                new_marbles = new_marbles.filter(v=>[v[0],v[1]].join()!=[i,j].join())
            }
        }))
        tc.marbles = new_marbles
        // console.log(tc.marbles);
        
    }
    
ans.push(count.reduce((a,c)=>a+c.reduce((a1,c1)=>a1+(c1==1?1:0),0),0));
// console.log(tc,ans)
}


for(let i=0; i<ans.length;i++){
    console.log(ans[i])
}