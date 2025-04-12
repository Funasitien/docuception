### Calcul des distances entre les points
Montrons que les distances \( |a - b| \), \( |b - c| \), et \( |c - a| \) sont égales.

1. **Distance \( |a - b| \) :**
\[
a - b = -bj - cj^2 - b = -b(1 + j) - cj^2
\]
Utilisons \( 1 + j = -j^2 \) (car \( j^2 + j + 1 = 0 \)) :
\[
a - b = -b(-j^2) - cj^2 = bj^2 - cj^2 = j^2(b - c)
\]
Ainsi :
\[
|a - b| = |j^2(b - c)| = |j^2| \cdot |b - c| = |b - c|
\]

2. **Distance \( |c - a| \) :**
\[
c - a = c - (-bj - cj^2) = c + bj + cj^2 = c(1 + j^2) + bj
\]
Avec \( 1 + j^2 = -j \) :
\[
c - a = -jc + bj = j(b - c)
\]
Donc :
\[
|c - a| = |j(b - c)| = |j| \cdot |b - c| = |b - c|
\]

3. **Distance \( |b - c| \) :**
C'est directement \( |b - c| \).

### Conclusion
Les trois distances \( |a - b| \), \( |b - c| \), et \( |c - a| \) sont égales à \( |b - c| \). Ainsi, les points \( a \), \( b \), et \( c \) forment un triangle équilatéral.