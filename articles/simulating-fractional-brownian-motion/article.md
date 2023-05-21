# Simulation of a Fractional Brownian Motion


## Definition

A fractional Brownian motion (fBm) is a continuous Gaussian process $W^H$ with mean $0$ and covariance function defined as follows:


$$
\mathbb{E}[W^H_tW^H_s] := \frac{1}{2}\Big(|t|^{2H} + |s|^{2H} - |t - s|^{2H}\Big)
$$

where $H \in \left]0, 1\right[$ is known as the **Hust index/parameter** of the given fBm.

## Properties

**Mandelbrot and Van Ness representation**:

$$
W^H_t := C_H\Big(\int_0^t (t - s)^{H - \frac{1}{2}}\mathrm{d}W_s + \int_{- \infty}^0 \Big[(t - s)^{H - \frac{1}{2}} - (-s)^{H - \frac{1}{2}}\Big]\mathrm{d}W_s\Big)
$$

where:
- $t > 0$
- $\alpha := H + \frac{1}{2}$
- $(W_s)_s$ represents a classical Brownian motion defined on $\mathbb{K} \subseteq \mathbb{R}$ and:

$$
C_H := \sqrt{\frac{2H\Gamma(\frac{3}{2} - H)}{\Gamma(\alpha)\Gamma(2 - 2H)}}
$$

- $\Gamma$ denotes the Gamma function defined by:

$$\Gamma : \mathbb{C} \ni z \longmapsto \int _{0}^{+\infty }t^{z-1}\,\mathrm {e} ^{-t}\,\mathrm {d} t \in \mathbb{R}$$


**Basic properties**:

- **Self-similarity**: $W^H_{at}$ has the same probabilistic law as the process $a^HW^H_t$
- **Stationary increments**: $W^H_{t + \Delta} - W^H_t$ has the same probabilistic law as $W^H_\Delta$ for a small quantity $\Delta > 0$
- **Correlation of increments**:
    - $H = \frac{1}{2}$: independent increments (same as Brownian motion)
    - $H > \frac{1}{2}$: positivelw correlated increments
    - $H < \frac{1}{2}$: negatively correlated increments
- **Regularity of trajectories**: $\forall \varepsilon > 0$, the trajectories of the process $(W^H_t)_t$ are $(H - \varepsilon)$- Hölder continuous almost surely

## Simulation


As we know the process $(W^H_t)_t$ to simulate is a Gaussian process with a given and explicit covariance expression, we could use the Cholesky method to perform the simulation:



First, we set:
- $\mathbf{T} := \left[0, T\right]$ the considered time interval with our horizon $T > 0$
- $N \in \mathbb{N}^*$: the number of samples to be simulated

---

1. Consider a partition of the considered time interval $\left[0, T\right]$: $$\Pi_N := 0 =: t_0 < t_1 < \ldots < t_N := T $$

2. Compute the variance-covariance matrix $\Sigma$ of the Gaussian vector $(W^H_{t_i})_{i \in \lbrace 1, \ldots, N\rbrace}$ where:

$$
\begin{aligned}
\Sigma_{i,j} &:= \text{Cov}(W^H_{t_i}, W^H_{t_j}) \\\ 
&= \mathbb{E}[W^H_{t_i}W^H_{t_j}] - \mathbb{E}[W^H_{t_i}]\mathbb{E}[W^H_{t_j}] \\\ 
&= \mathbb{E}[W^H_{t_i}W^H_{t_j}] \\\ 
&= \frac{1}{2}\Big(|t|^{2H} + |s|^{2H} - |t - s|^{2H}\Big)
\end{aligned}
$$

3. Perform the Cholesky decomposition of $\Sigma$:
$$
\exists L \in \mathcal{T}^-, \ \Sigma := LL^\top
$$
where $L$ is a lower-triangular matrix (from the space $\mathcal{T}^-$)

4. Simulate $N$ independent $\mathcal{N}(0, 1)$ random variables $Z := (Z_1, \ldots, Z_N)^\top \in \mathcal{M}_{N, 1} \underset{\mathrm{iso}}{=}\mathbb{R}^N$

5. Define the column-vector $X := L^\top Z$

6. Define $\forall i \in \lbrace 1, \ldots, n \rbrace, \ Y_{t_i} := X_i$

7. The ultimate simulated trajectory of the fBm on $\mathbf{T} = \left[0, T\right]$ is:

$$
(0, Y_{t_1}, \ldots, Y_{t_N})
$$


We now have a fully operational simulation protocol to generate random paths of a fBm.


## Implementation

```python
# Importing modules 
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

```python
def fBm(N: int = 10**3, 
        H: float = 1e-1, 
        T: float = 1.0) -> np.ndarray:
    """Function simulating and returning a fractional Brownian motion

    Args:
        N (int, optional): Length of the simulated sample. Defaults to 10**3.
        H (float, optional): Hurst parameter. Defaults to 1e-1.
        T (float, optional): Time horizon. Defaults to 1.0.

    Returns:
        np.ndarray: Array containing the fBm trajectory
    """

    # Defining the time grid
    Pi = np.linspace(0, T, N)
    
    # Computation of the variance covariance matrix
    gamma = np.zeros((N-1, N-1))
    for i in range(N-1):
        for j in range(N-1):
            gamma[i, j] = (Pi[i+1]**(2*H) + Pi[j+1]**(2*H) - (Pi[i+1] - Pi[j+1])**(2*H))/2
            
    # Performing a Cholesky factorization
    C = np.linalg.cholesky(gamma)
    
    # Simulation of a normal law
    Z = np.random.normal(0, 1, N - 1)
    
    # Simulation of the fractional brownian motion
    Y = C.dot(Z)

    # Returning the simulated fBm path
    return {"t": Pi, "fBm": np.array([0] + list(Y))}
```

## Results

```python
# Executing the fBm function
res = fBm()
```

```python
df = pd.DataFrame(data=res, columns=["t", "fBm"]).set_index("t")
print(df)
```


```
               fBm
t                 
0.000000  0.000000
0.001001  0.016699
0.002002  0.032426
0.003003  0.133773
0.004004  0.048373
...            ...
0.995996 -0.089878
0.996997 -0.133561
0.997998 -0.104243
0.998999 -0.014966
1.000000  0.200357

[1000 rows x 1 columns]
```

```python
# Plotting the information
plt.figure(figsize=(10, 5))
plt.plot(res["t"], res["fBm"], color="blue", ls="-")
plt.title("Fractional Brownian motion trajectory")
plt.xlabel("Time")
plt.ylabel("Simulation")
plt.show()
```

<img src="https://raw.githubusercontent.com/lcsrodriguez/articles/main/articles/simulating-fractional-brownian-motion/img/fBm.png">
