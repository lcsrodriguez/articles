# Mercator projection

We denote $\mathbb{K} \subseteq \mathbb{R}$, a subset of the real line. 

$$
\begin{aligned} 
\int \sec \varphi \ d\varphi &=  \int \frac{d\varphi}{\cos \varphi} \\\ 
 &=  \int \frac{\cos \varphi}{\cos^2 \varphi} \ d\varphi \\\
 &=  \int \frac{\cos \varphi}{1 - \sin^2 \varphi} \ d\varphi \\\
 &=  \int \frac{\cos \varphi}{(1 - \sin \varphi)(1 + \sin \varphi)} \ d\varphi\ \\\
 &= \frac{1}{2} \int \frac{\cos \varphi}{1 - \sin \varphi} + \frac{\cos \varphi}{1 + \sin \varphi} \ d\varphi \\\
 &= \frac{1}{2} (- \ln \vert 1 - \sin \varphi \vert + \ln\vert 1 + \sin \varphi \vert) + c \ , c \in \mathbb{K} \\
 &= \frac{1}{2} \ln\Bigl\vert\frac{1 + \sin \varphi}{1 - \sin \varphi} \Bigr\vert + c \ , c \in \mathbb{K} \\
 &= \frac{1}{2} \ln\Bigl\vert\frac{1 + \sin \varphi}{1 - \sin \varphi} \times \frac{1 + \sin \varphi}{1 + \sin \varphi} \Bigr\vert + c \ , c \in \mathbb{K} \\
  &=  \frac{1}{2} \ln\Bigl\vert\frac{(1 + \sin \varphi)^2}{1 - \sin^2 \varphi}\Bigr\vert + c \ , c \in \mathbb{K} \\
 &=  \frac{1}{2} \ln\Bigl\vert\frac{(1 + \sin \varphi)^2}{\cos^2 \varphi}\Bigr\vert + c \ , c \in \mathbb{K} \\
 &=  \ln\Bigl\vert\frac{1}{\cos \varphi} + \frac{\sin \varphi}{\cos \varphi}\Bigr\vert + c \ , c \in \mathbb{K} \\
 &=  \ln\vert\sec \varphi + \tan \varphi\vert + c \\ \blacksquare
\end{aligned}
$$