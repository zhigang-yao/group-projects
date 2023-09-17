# Overview
<div class="justify-text">
This project delves into the extension of Principal Component Analysis (PCA) to multivariate datasets constrained by nonlinear relationships, residing on Riemannian manifolds. Our primary objective is to identify curves on these manifolds that preserve their inherent interpretability as principal components while being flexible enough to encompass non-geodesic variations.
<br><br>
We introduce the concept of a "principal flow," which represents a curve on the manifold passing through the data mean. This curve possesses the unique property that, at any given point, the tangent velocity vector aligns with the local first eigenvector derived from tangent space PCA, subject to smoothness constraints. Essentially, a particle following the principal flow path seeks to traverse the most variable data path, taking into account smoothness limitations. The rigorous definition of a principal flow is formulated as a Lagrangian variational problem, subsequently reduced to an Ordinary Differential Equation (ODE) problem through the Euler–Lagrange method. We provide conditions for existence and uniqueness and outline an algorithm for numerical problem-solving. We also introduce higher-order principal flows.
<br><br>
Furthermore, we demonstrate that global principal flows yield traditional principal components in an Euclidean space. Through illustrative examples, we showcase the principal flow's ability to capture patterns of variation that may elude other manifold PCA methods.
</div>

Detailed description and discussion can be found in paper: :material-arrow-right: <a href="https://www.tandfonline.com/doi/abs/10.1080/01621459.2013.849199" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:

```
@article{panaretos2014principal,
    title={Principal flows},
    author={Panaretos, Victor M and Pham, Tung and Yao, Zhigang},
    journal={Journal of the American Statistical Association},
    volume={109},
    number={505},
    pages={424--436},
    year={2014}
}
```