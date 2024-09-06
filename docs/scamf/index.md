# scAMF
## Overview

<div class="justify-text">
This project, scAMF (Single-cell Analysis via Manifold Fitting), represents a transformative approach for enhancing the accuracy of clustering and visualization in single-cell RNA sequencing (scRNA-seq) studies. scAMF addresses issues such as noises inherent in biological variability and technical errors by employing an innovative manifold fitting module that denoises the data by unfolding their distribution in the ambient space, aligning gene expression vectors more closely with their true underlying structures.
<br>
Through extensive comparative studies and experimental analysis, we demonstrate that scAMF excels in clustering efficiency and data visualization clarity compared to existing scRNA-seq analysis algorithms. The superior performances are largely due to scAMF's ability to refine the spatial distribution of data and effectively capture class-consistent neighborhoods. These breakthroughs not only pave the way for significant advances in non-linear data analysis within the realm of scRNA-seq but also inspire further research into the application of manifold fitting techniques in this critical field, enhancing the precision and reliability of data interpretation.
</div>

An implementation in Matlab is available on Github: :material-arrow-right: <a href="https://github.com/zhigang-yao/scAMF" class="btn-href">:simple-github:</a>  
Detailed description and discussion can be found in paper: :material-arrow-right: <a href="" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:
```
@article{doi:10.1073/pnas.2400002121,
author = {Zhigang Yao  and Bingjie Li  and Yukun Lu  and Shing-Tung Yau },
title = {Single-cell analysis via manifold fitting: A framework for RNA clustering and beyond},
journal = {Proceedings of the National Academy of Sciences},
volume = {121},
number = {37},
pages = {e2400002121},
year = {2024},
doi = {10.1073/pnas.2400002121},
URL = {https://www.pnas.org/doi/abs/10.1073/pnas.2400002121},
eprint = {https://www.pnas.org/doi/pdf/10.1073/pnas.2400002121}
}
```