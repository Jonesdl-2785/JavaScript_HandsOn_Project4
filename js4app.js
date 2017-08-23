let i;
let num = [];
num[0] = 0;
num[1] = 1;
for(i=0; i<=20; i++)
{

num[i+2] = num[i] + num[i+1];
  window.alert(num[i]);
}
