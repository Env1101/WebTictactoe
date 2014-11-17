function hasWon(x, y) {
	val = A[x][y];
	var sur = [[0,1,0],[0,-1,0],[1,1,0],[-1,-1,0],[1,0,0],[-1,0,0],[1,-1,0],[-1,1,0]];
	for (i = 0; i < 8; i++) {
		var j = 1;
		while (checkBound(x+j*sur[i][0],y+j*sur[i][1]) && A[x+j*sur[i][0]][y+j*sur[i][1]] == val) {
			j++;
			sur[i][2]++;
		}
		if (i%2 == 1) {
			if (sur[i][2]+sur[i-1][2] >= 5) {
				if (sur[i][2]+sur[i-1][2]==5 && checkBound(x+(1+sur[i][2])*sur[i][0],y+(1+sur[i][2])*sur[i][1]) && checkBound(x+(1+sur[i-1][2])*sur[i-1][0],y+(1+sur[i-1][2])*sur[i-1][1]) && A[x+(1+sur[i][2])*sur[i][0]][y+(1+sur[i][2])*sur[i][1]]==(val*-1) && A[x+(1+sur[i-1][2])*sur[i-1][0]][y+(1+sur[i-1][2])*sur[i-1][1]]==(val*-1) {
					return false;
				}
			return true;
			}
		}
	}
	return false;
} 

function checkBound(x,y) {
	if (x>=0 && x<A.length && y>=0 && y<a[1].length) {
		return true;
	}
	return false;
}