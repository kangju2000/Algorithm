#include <stdio.h>
long long a[2000010];
void ipt(int x) {
	for (int i = 1; i*i <= x; i++) {
		if (x%i == 0) {
			a[i]++;
			if (i != x / i) a[x / i]++;
		}
	}
}
int main() {
	int n, m;
	scanf("%d", &n);
	for (int i = 1; i <= n; i++) {
		scanf("%d", &m);
		ipt(m);
	}
	long long max = 0;
	for (int i = 1; i < 2000010; i++) {
		if (a[i] < 2) continue;
		max = (max < a[i] * i) ? a[i] * i : max;
	}
	printf("%lld\n", max);

}