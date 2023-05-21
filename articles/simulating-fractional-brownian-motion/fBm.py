import numpy as np
import matplotlib.pyplot as plt


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


res = fBm()
plt.figure(figsize=(10, 5))
plt.plot(res["t"], res["fBm"], color="blue", ls="-")
plt.title("Fractional Brownian motion trajectory")
plt.xlabel("Time")
plt.ylabel("Simulation")
plt.show()

#print(fBm())
