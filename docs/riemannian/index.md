# Estimating Riemannian Quantities
## Overview

<div class="justify-text">
This project studies how to recover the Riemannian geometric structure of a submanifold from noisy observations in Euclidean space. Our main result is that, under a Gaussian corruption model, several fundamental Riemannian quantities, including tangent spaces, intrinsic dimension, and the second fundamental form, are identifiable from derivatives of the noisy density.
<br><br>
Our approach is built on the small-noise structure of the noisy density. We show that the log-density behaves like a scaled squared distance to the manifold, and its first three derivatives encode, respectively, a normal field, a tangent-normal spectral splitting, and the variation of the tangential projection. These structures lead to population-level geometric estimators and sample-level plug-in estimators based on kernel density derivatives.
<br><br>
Furthermore, we connect these constructions to density-induced ambient metrics, providing a geometric interpretation of how the underlying manifold gives rise to an ambient geometric structure through the noisy density.
</div>

Detailed description and discussion can be found in paper: :material-arrow-right: <a href="https://arxiv.org/abs/2603.27171" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:

```
@article{chen2026riemannian,
  title={Estimation of Riemannian Quantities from Noisy Data via Density Derivatives},
  author={Chen, Junhao and Li, Ruowei and Yao, Zhigang},
  journal={arXiv preprint arXiv:2603.27171},
  year={2026}
}
```
