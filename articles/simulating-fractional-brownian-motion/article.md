# Simulation of a Fractional Brownian Motion


## Definition

A fractional Brownian motion (fBm) is a continuous Gaussian process $W^H$ with mean $0$ and covariance function defined as follows:


$$
\mathbb{E}[W^H_tW^H_s] := \frac{1}{2}\Big(|t|^{2H} + |s|^{2H} - |t - s|^{2H}\Big)
$$

where $H \in \left]0, 1\right[$ is known as the **Hust index/parameter** of the given fBm.

## Properties


## Simulation

- Pseudo-code

As we know the process $(W^H_t)_t$ to simulate is a Gaussian process with a given and explicit covariance expression, we could use the Cholesky method to perform the simulation:

1. Consider a partition of the considered time interval $\left[0, T\right]$: $$\Pi_N := 0 =: t_0 < t_1 < \ldots < t_N := T $$