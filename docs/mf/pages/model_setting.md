# Model Setting

Let $\mathcal{M}$ be a $d$-dimensional smooth latent manifold embedded in the ambient space $\mathbb{R}^D$. In this problem, we focus on a random vector $Y \in \mathbb{R}^D$ that can be expressed as

$$
    Y = X + \xi,
$$

where $X \in \mathbb{R}^D$ is an unobserved random vector following a distribution $\omega$ supported on the latent manifold $\mathcal{M}$, and $\xi \sim \phi_\sigma$ represents the ambient-space observation noise, independent of $X$, with a standard deviation $\sigma$. The distribution of $Y$ can be viewed as the convolution of $\omega$ and $\phi_\sigma$, whose density at point $y$ can be expressed as

$$
    \nu(y) = \int_\mathcal{M} \phi_\sigma(y-x)\omega(x)d x.
$$

Assume $\mathcal{Y} = \{y_i\}_{i=1}^N \subset \mathbb{R}^D$ is the collection of observed data points, also in the form of

$$
    y_i = x_i + \xi_i, \quad \text{ for } i = 1,\cdots,N, 
$$

with $(y_i, x_i,\xi_i)$ being $N$ independent and identical realizations of $(Y,X,\xi)$. Based on $\mathcal{Y}$, we construct an estimator $\widehat{\mathcal{M}}$ for $\mathcal{M}$ and provide theoretical justification for it under the following main assumptions:

- The latent manifold $\mathcal{M}$ is a compact and twice-differentiable $d$-dimensional sub-manifold, embedded in the ambient space $\mathbb{R}^D$. Its volume with respect to the $d$-dimensional Hausdorff measure is upper bounded by $V$, and its reach[^1] is lower bounded by a fixed constant $\tau$.
    
- The distribution $\omega$ is a uniform distribution, with respect to the $d$-dimensional Hausdorff measure, on $\mathcal{M}$.

- The noise distribution $\phi_\sigma$ is a Gaussian distribution supported on $\mathbb{R}^D$ with density function 

    $$
      \phi_\sigma (\xi)= (\frac{1}{2\pi \sigma^2})^{\frac{D}{2}}\exp{(-\frac{\|\xi\|_2^2}{2\sigma^2})}.
    $$

- The intrinsic dimension $d$ and noise standard deviation $\sigma$ are known.

[^1]: A non-negative quantity measuring the curvature of a manifold.