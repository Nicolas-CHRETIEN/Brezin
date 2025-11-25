function lastDeclarationComputerSentance() {
  const annonce = S.score.lastDeclaration.name;
  switch (annonce) {
    case "7 d'atout":           return "Cseven_trump";
    case "Brézin":              return "Cbrezin";
    case "40 de Brézin":        return "Cbrezin_40";
    case "Couple d'atout":      return "Ccouple_trump";
    case "couple de coeur":     return "Ccouple";
    case "couple de carreau":   return "Ccouple";
    case "couple de pique":     return "Ccouple";
    case "couple de trèfle":    return "Ccouple";
    case "Carré de valets":     return "Ccarre_valets";
    case "Carré de dames":      return "Ccarre_dames";
    case "Carré de rois":       return "Ccarre_rois";
    case "Carré d'as":          return "Ccarre_as";
    case "deux cent cinquante": return "Ctwo_fifty";
    default:                    return null;
  }
}