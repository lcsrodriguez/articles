# Simulation of a Fractional Brownian Motion


## Definition

A fractional Brownian motion (fBm) is a continuous Gaussian process $W^H$ with mean $0$ and covariance function defined as follows:


$$
\mathbb{E}[W^H_tW^H_s] := \frac{1}{2}\Big(|t|^{2H} + |s|^{2H} - |t - s|^{2H}\Big)
$$

where $H \in \left]0, 1\right[$ is known as the **Hust index/parameter** of the given fBm.

## Properties


## Simulation


As we know the process $(W^H_t)_t$ to simulate is a Gaussian process with a given and explicit covariance expression, we could use the Cholesky method to perform the simulation:

1. Consider a partition of the considered time interval $\left[0, T\right]$: $$\Pi_N := 0 =: t_0 < t_1 < \ldots < t_N := T $$

2. Compute the variance-covariance matrix $\Sigma$ of the Gaussian vector $(W^H_{t_i})_{i \in \lbrace 1, \ldots, n\rbrace}$

3. Perform the Cholesky decomposition of $\Sigma$:
$$
\exists L \in \mathcal{T}^-_n, \ \Sigma := LL^\top
$$
where $L$ is a lower-triangular matrix (from the space $\mathcal{T}^-_n$)

4. Simulate $N$ independent $\mathcal{N}(0, 1)$ random variables $Z := (Z_1, \ldots, Z_N)^\top \in \mathcal{M}_{n, 1} \underset{\mathrm{iso}}{=}\mathbb{R}^n$

5. Define the column-vector $X := L^\top Z$

6. Define $\forall i \in \lbrace 1, \ldots, n \rbrace, \ Y_{t_i} := X_i$

7. The ultimate simulated trajectory of the fBm on $\mathbf{T} = \left[0, T\right]$ is:

$$
(0, Y_{t_1}, \ldots, Y_{t_N})
$$


We now have a fully operational simulation protocol to generate random paths of a fBm.
