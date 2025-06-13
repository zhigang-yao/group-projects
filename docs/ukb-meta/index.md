---
title: UKB-Metabolic Biomarkers
---

# Analysis UK Biobank NMR Metabolic Biomarkers with Manifold Fitting
## Overview
<div class="justify-text">
Nuclear magnetic resonance (NMR)-based metabolomics is revolutionizing our comprehension of human metabolic health by enabling the simultaneous quantification of diverse metabolites at a population scale. This method offers insights into systemic metabolism, influenced by both genetic and environmental factors, and correlates with clinical outcomes. For example, metabolite profiles have been associated with cardiovascular disease and diabetic complications, thus aiding early interventions and patient management. Integrating data from the UK Biobank, this research extends beyond individual biomarkers to explore metabolic heterogeneity across a large population cohort of approximately 210,000 participants, analyzing 251 metabolic biomarkers to enhance disease mechanism understanding and refine risk prediction models.
<br><br>
This study aims to develop a comprehensive method to elucidate population-level metabolic heterogeneity, using manifold fitting to analyze categories of metabolic biomarkers. This approach allows for the detection of low-dimensional structures within high-dimensional data, improving our understanding of metabolic variability and its health implications. The method involves clustering metabolic biomarkers, applying manifold fitting, visualizing heterogeneity, and characterizing distinct metabolic subgroups related to health outcomes and lifestyle factors. This integrated approach seeks to connect metabolic patterns to actionable health strategies, particularly for high-risk populations, and represents the first application of manifold fitting to large-scale metabolomic data.
</div>

An implementation in R and MATLAB is available on Github: :material-arrow-right: <a href="https://github.com/zhigang-yao/MF-Metabolomic-Heterogeneity" class="btn-href">:simple-github:</a>  
Detailed description and discussion can be found in paper: :material-arrow-right: <a href="https://www.pnas.org/doi/10.1073/pnas.2500001122" class="btn-href">:material-newspaper-variant-outline:</a>  
To cite: :material-arrow-down:
```
@article{
doi:10.1073/pnas.2500001122,
author = {Bingjie Li  and Jiaji Su  and Runyu Lin  and Shing-Tung Yau  and Zhigang Yao },
title = {Manifold fitting reveals metabolomic heterogeneity and disease associations in UK Biobank populations},
journal = {Proceedings of the National Academy of Sciences},
volume = {122},
number = {22},
pages = {e2500001122},
year = {2025},
doi = {10.1073/pnas.2500001122},
URL = {https://www.pnas.org/doi/abs/10.1073/pnas.2500001122},
eprint = {https://www.pnas.org/doi/pdf/10.1073/pnas.2500001122}
}
```