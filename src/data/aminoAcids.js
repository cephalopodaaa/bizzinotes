const aminoAcids = [

    {
      "name": "Alanine",
      "three_letter_code": "ALA",
      "formula": "C3H7NO2",
      "molecular_weight": 89.093,
      "pka1": 2.35,
      "pka2": 9.87,
      "side_chain": "Methyl group (CH3)",
      "property": "Alanine is one of the most abundant amino acids found in proteins. It is often found in the hydrophobic interior of proteins, where its small size and nonpolar nature help it to form tight packing interactions with other hydrophobic amino acids.",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/L-alanine-zwitterion-3D-balls.png/200px-L-alanine-zwitterion-3D-balls.png"
    },
    {
      "name": "Arginine",
      "three_letter_code": "ARG",
      "formula": "C6H14N4O2",
      "molecular_weight": 174.202,
      "pka1": 2.18,
      "pka2": 9.04,
      "pka3": 12.48,
      "side_chain": "Guanidino group (NH=C(NH2)NH2)",
      "property": "Arginine is a positively charged amino acid that is often found in the active sites of enzymes and other proteins that bind to negatively charged molecules, such as DNA or RNA. Its guanidino group can form hydrogen bonds with these molecules, helping to stabilize their interactions.",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/L-arginine-3D-balls.png/200px-L-arginine-3D-balls.png"
    },
    {
      "name": "Asparagine",
      "three_letter_code": "ASN",
      "formula": "C4H8N2O3",
      "molecular_weight": 132.119,
      "pka1": 2.14,
      "pka2": 8.72,
      "side_chain": "Carboxamide group (CONH2)",
      "property": "Asparagine is often found in the active sites of enzymes that catalyze the transfer of an amide group from one molecule to another. Its carboxamide group can participate in these reactions, allowing for the formation of new peptide bonds or the modification of existing ones.",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/L-asparagine-3D-balls.png/200px-L-asparagine-3D-balls.png"
    },
    {
        "name": "Cysteine",
        "three_letter_code": "CYS",
        "formula": "C3H7NO2S",
        "molecular_weight": 121.154,
        "pka1": 1.96,
        "pka2": 8.18,
        "side_chain": "Thiol group (-SH)",
        "property": "Cysteine contains a thiol group (-SH) in its side chain, which allows it to form disulfide bonds with other cysteine residues in the same or different proteins. These disulfide bonds can help to stabilize protein structures, such as in the case of insulin.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/L-cysteine-3D-balls.png/200px-L-cysteine-3D-balls.png"
      },
      {
        "name": "Glutamic acid",
        "three_letter_code": "GLU",
        "formula": "C5H9NO4",
        "molecular_weight": 147.129,
        "pka1": 2.19,
        "pka2": 9.67,
        "side_chain": "Carboxyl group (COOH)",
        "property": "Glutamic acid is a negatively charged amino acid that is often found in the active sites of enzymes involved in metabolic processes. Its carboxyl group can participate in reactions that involve the transfer of protons or electrons, helping to activate or deactivate substrates.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/L-glutamic_acid_3D_ball.png/200px-L-glutamic_acid_3D_ball.png"
      },
      {
        "name": "Glutamine",
        "three_letter_code": "GLN",
        "formula": "C5H10N2O3",
        "molecular_weight": 146.145,
        "pka1": 2.17,
        "pka2": 9.13,
        "side_chain": "Carboxamide group (CONH2)",
        "property": "Glutamine is a neutral amino acid that is often found in the active sites of enzymes involved in nitrogen metabolism. Its carboxamide group can donate or accept nitrogen atoms, making it a versatile participant in reactions that involve the transfer of amino groups.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/L-glutamine-3D-balls.png/200px-L-glutamine-3D-balls.png"
      },
      {
        "name": "Glycine",
        "three_letter_code": "GLY",
        "formula": "C2H5NO2",
        "molecular_weight": 75.067,
        "pka1": 2.35,
        "pka2": 9.78,
        "side_chain": "Hydrogen (H)",
        "property": "Glycine is the smallest amino acid and has only a hydrogen atom as its side chain. It is often found in turns and loops of protein structures, where its small size and flexibility allow it to contribute to the conformational stability of the protein.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Glycine-3D-balls.png/200px-Glycine-3D-balls.png"
      },
      {
        "name": "Histidine",
        "three_letter_code": "HIS",
        "formula": "C6H9N3O2",
        "molecular_weight": 155.155,
        "pka1": 1.82,
        "pka2": 9.17,
        "side_chain": "Imidazole group",
        "property": "Histidine contains an imidazole group in its side chain, which can act as a proton acceptor or donor depending on the local environment. This makes histidine an important participant in enzyme catalysis and protein-protein interactions.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/L-histidine-3D-balls.png/200px-L-histidine-3D-balls.png"
      },
      {
        "name": "Isoleucine",
        "three_letter_code": "ILE",
        "formula": "C6H13NO2",
        "molecular_weight": 131.175,
        "pka1": 2.36,
        "pka2": 9.60,
        "side_chain": "Isopropyl group (-CH(CH3)2)",
        "property": "Isoleucine contains an isopropyl group in its side chain, which makes it a hydrophobic amino acid. It is often found in the interior of protein structures, where its hydrophobicity can contribute to the stability of the protein core.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Isoleucine-3D-balls.png/200px-Isoleucine-3D-balls.png"
      },
      {
        "name": "Leucine",
        "three_letter_code": "LEU",
        "formula": "C6H13NO2",
        "molecular_weight": 131.1736,
        "pka1": 2.36,
        "pka2": 9.60,
        "side_chain": "Isobutyl (-CH2-CH(CH3)2)",
        "property": "Leucine is a hydrophobic amino acid and is commonly found in the interior of proteins. It is often involved in the formation of hydrophobic clusters, which contribute to the stability of the protein structure.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/L-Leucine.svg/200px-L-Leucine.svg.png"
      },
      {
        "name": "Lysine",
        "three_letter_code": "LYS",
        "formula": "C6H14N2O2",
        "molecular_weight": 146.1882,
        "pka1": 2.18,
        "pka2": 8.95,
        "side_chain": "Amino Hexyl (-CH2-CH2-CH2-CH2-CH2-NH3+)",
        "property": "Lysine is a polar, basic amino acid with a positively charged side chain. It is often found on the surface of proteins and can form salt bridges with negatively charged amino acids to contribute to protein stability.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/8/88/L-Lysin_-_L-Lysine.svg"
      },
      {
        "name": "Methionine",
        "three_letter_code": "MET",
        "formula": "C5H11NO2S",
        "molecular_weight": 149.2124,
        "pka1": 2.28,
        "pka2": 9.21,
        "side_chain": "Methyl Thio Ether (-CH2-S-CH3)",
        "property": "Methionine is a hydrophobic amino acid and is commonly found in the interior of proteins. Its sulfur atom can form a strong bond with another sulfur atom to contribute to the stability of protein structures such as disulfide bonds.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Methionin_-_Methionine.svg"
      },
      {
        "name": "Phenylalanine",
        "three_letter_code": "PHE",
        "formula": "C9H11NO2",
        "molecular_weight": 165.1900,
        "pka1": 1.83,
        "pka2": 9.13,
        "side_chain": "Phenyl (-C6H5)",
        "property": "Phenylalanine is a hydrophobic amino acid and is commonly found in the interior of proteins. Its aromatic ring can participate in various non-covalent interactions such as pi stacking and hydrophobic interactions, which contribute to protein stability.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/L-Phenylalanin_-_L-Phenylalanine.svg"
      },
      {
        "name": "Proline",
        "three_letter_code": "PRO",
        "formula": "C5H9NO2",
        "molecular_weight": 115.1310,
        "pka1": 1.99,
        "pka2": 10.60,
        "side_chain": "Pyrrolidine (-C4H7NH-)",
        "property": "Proline has a unique structure where its side chain is covalently bonded to its backbone nitrogen, forming a rigid five-membered ring. This restricts its conformational flexibility and allows it to play a key role in the formation of turns and loops in protein structures.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Prolin_-_Proline.svg"
      },
      {
        "name": "Serine",
        "three_letter_code": "SER",
        "formula": "C3H7NO3",
        "molecular_weight": 105.0930,
        "pka1": 2.21,
        "pka2": 9.15,
        "side_chain": "Hydroxymethyl (-CH2OH)",
        "property": "Serine has a hydroxyl group in its side chain that can participate in various interactions such as hydrogen bonding and phosphorylation. It is often found on the surface of proteins and can play important roles in protein-protein interactions and enzyme catalysis.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/L-Serine.svg/200px-L-Serine.svg.png"
      },
      {
        "name": "Threonine",
        "three_letter_code": "THR",
        "formula": "C4H9NO3",
        "molecular_weight": 119.1190,
        "pka1": 2.09,
        "pka2": 10.43,
        "side_chain": "Hydroxymethyl (-CH(OH)CH3)",
        "property": "Threonine has a hydroxyl group in its side chain that can participate in various interactions such as hydrogen bonding and phosphorylation. It is often found on the surface of proteins and can play important roles in protein-protein interactions and enzyme catalysis.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/L-Threonin_-_L-Threonine.svg"
      },
      {
        "name": "Tryptophan",
        "three_letter_code": "TRP",
        "formula": "C11H12N2O2",
        "molecular_weight": 204.2250,
        "pka1": 2.38,
        "pka2": 9.39,
        "side_chain": "Indole (-C8H6N)",
        "property": "Tryptophan has an indole side chain that is unique among the amino acids. Its aromatic ring can participate in various non-covalent interactions such as pi stacking and hydrogen bonding, which contribute to protein stability. Tryptophan also has a high molar extinction coefficient at 280 nm, which makes it useful in spectroscopic studies of protein structure and function.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/L-Tryptophan_-_L-Tryptophan.svg/440px-L-Tryptophan_-_L-Tryptophan.svg.png"
      },
      {
        "name": "Tyrosine",
        "three_letter_code": "TYR",
        "formula": "C9H11NO3",
        "molecular_weight": 181.1890,
        "pka1": 2.20,
        "pka2": 9.11,
        "side_chain": "Phenol (-C6H4OH)",
        "property": "Tyrosine has a phenol side chain that can participate in various interactions such as hydrogen bonding and phosphorylation. It is often found on the surface of proteins and can play important roles in protein-protein interactions and enzyme catalysis. Tyrosine can also undergo various post-translational modifications such as sulfation and glycosylation, which can further modulate its function.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/40/L-Tyrosin_-_L-Tyrosine.svg"
      },
      {
        "name": "Valine",
        "three_letter_code": "VAL",
        "formula": "C5H11NO2",
        "molecular_weight": 117.1470,
        "pka1": 2.32,
        "pka2": 9.62,
        "side_chain": "Isopropyl (-C(CH3)2CH)",
        "property": "Valine is a hydrophobic amino acid and is commonly found in the interior of proteins. Its isopropyl side chain is branched, which limits its conformational flexibility and allows it to play a role in stabilizing protein structure by promoting the formation of hydrophobic interactions between nearby amino acids. Valine is particularly abundant in proteins that are involved in muscle contraction and is essential for their proper function.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/3d/L-valine-2D-skeletal.png",
      }


  ]
  export default aminoAcids;