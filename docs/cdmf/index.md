# Curvature-driven Manifold Fitting
## Overview

<div class="justify-text">
Manifold fitting aims to reconstruct a low-dimensional manifold from high-dimensional data. This project studies the recovery of a compact \(C^3\) submanifold \(\mathcal{M} \subset \mathbb{R}^D\) with dimension \(d < D\) and positive reach \(\tau\) from noisy observations \(Y = X + \xi\), where \(X\) is uniformly distributed on \(\mathcal{M}\) and \(\xi \sim \mathcal{N}(0, \sigma^2 I_D)\) is isotropic Gaussian noise.
<br><br>
To project points in a tubular neighborhood of \(\mathcal{M}\) back onto the manifold, we construct a sample-based estimator using a normalized local kernel with theoretically derived bandwidth \(r = c_D \sigma\). Under suitable sample size conditions, we establish a uniform asymptotic expansion
<br><br>
\[
F(z) = \pi(z) + \frac{d}{2} H_{\pi(z)} \sigma^2 + O(\sigma^3), \qquad z \in \Gamma,
\]
<br><br>
where \(\pi(z)\) is the projection of \(z\) onto \(\mathcal{M}\) and \(H_{\pi(z)}\) is the mean curvature vector at \(\pi(z)\). The resulting fitted manifold achieves second-order accuracy, and the analysis shows how curvature information can be used to improve denoising and geometric recovery under unbounded isotropic noise.
</div>

Detailed description and discussion can be found in paper: :material-arrow-right: <a href="https://arxiv.org/abs/2601.10133" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:

```
@article{liyao2026curvature,
  title={Curvature-driven manifold fitting under unbounded isotropic noise},
  author={Ruowei Li and Zhigang Yao},
  year={2026},
  journal={arXiv preprint arXiv:2601.10133},
}
```
