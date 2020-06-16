# Dokumentation

## Klassenbeschreibung: 
### Display Object

#### Constructor
  Der Constructor verlangt **x**, **y**. Setzt alle unten aufgeführten Attribute.
#### Attribute
|name|Bescheibung|
| --- | --- |
|**x**|Aktuelle X-Position (in abhängikeit von Elternobjekt, wenn es eines gibt!)|  
|**y** |Aktuelle Y-Position (in abhängikeit von Elternobjekt, wenn es eines gibt!)|
|**imageWidth** |Breite, in welcher das aktuelle Bild des Objektes gezeichnet wird|  
|**imageHeight** |Höhe, in welcher das aktuelle Bild des Objektes gezeichnet wird|  
|**rot** |Aktuelle Rotation des Objektes in Bogenmaß|
|**scale** |Skallierung des gezeichneten Bildes und der draw-Funktion. 1 = 100% / 0.5 = 50%|
|**images** |Eine Liste, welche unter einem bestimmten Schlüsselstring ein bestimmtes Bild abspeichert|
|**doms** |Eine Liste welche unter einem bestimmten Schlüsselstring ein bestimmtes Video oder Gif abspeichert|
|**currentImage** |Das Bild, welches gerade ausgewählt ist|
|**currentDom** |Das Video oder Gif, welches gerade ausgewählt ist|
|**offsetX** |Die Verschiebung, um welches das aktuelle Bild des Objektes beim Zeichnen in X-Richtung verschoben wird.|
|**offsetY** |Die Verschiebung, um welches das aktuelle Bild des Objektes beim Zeichnen in Y-Richtung verschoben wird.|
|**visible** |Bestimmt, ob das Objekt dargestellt wird oder nicht. True: das aktuelle Image wird gezeichnet und die Draw-Funktion ausgeführt.| 
|**parent** |Wenn das Objekt einem anderem Objekt(einem Elternobjekt) als Child zugewiesen wird, wird hier das Elternobejekt gespeichert.|

#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
|  draw() | jeden Frame | Die Funktion sollte allen Code enthalten, der mit dem Aussehen des Objektes zu tun hat. Auch wird alles, was hier gezeichnet wird über das Image des Objektes gelegt. Hier könnte man mit P5 Objekten Arbeiten(Rect, text, etc.).| ja |
|  update() | jeden Frame | Die Funktion sollte allen Code enthalten, der mit Updates von dem Objekt zu tun hat. Hier könnte man Variablen etc. prüfen und anpassen.| ja |
|  init() | wird beim Start der Anwedung ausgeführt | Hier sollten Child Objekte erstellt und Bilder zugewiesen werden. Auch kann hier diverses andere definiert werden. Attribute sollten immer noch im Konrstrukter angelegt werden!!| ja |
|  hide(hide) | custom | Kann mit oder ohne Arguemnt ausgeführt werden. Ohne Angabe wird das Objekt unsichtbar gemacht. Mit der Angabe true wird das Objekt wieder sichtbar. Hat keinen Einfluss auf Videos oder Gifs! Diese müssen extra angezeigt und versteckt werden siehe showDom/hideDom| nein |
|  setRotationInDegree(`degree`) | custom |Rechnet die angegebenen `degree` in Bogenmaß um und setzt **rot** neu.| nein |
|  setOffset(`x`,`y`) | custom |Setzt das Offset für die **draw** und für das **currentImage** neu. Dom Offsets müssen extra über setDomOffset gesetzt werden.| nein |
|  addImage(`key`,`image`) | custom | Fügt ein `image` mit dem Schlüssel `key` der **images** Liste hinzu| nein |
|  switchImage(`key`) | custom | Wechselt das **currentImage** des Obejektes auf das image mit dem Schlüssel `key` aus der **images** Liste| nein |
|  setImageSize(`width`,`height`) | custom |Setzt die **imageWidth** auf `width` und die **imageHeight** auf `height`. Setzt nur die Bildgröße neu.| nein |
|  addDom(`key`,`dom`) | custom | Fügt ein `dom` mit dem Schlüssel `key` der **doms** Liste hinzu. Doms bezeichnet in dem Fall Videos oder Gifs| nein |
|  switchDom(`key`) | custom | Wechselt das **currentDom** des Obejektes auf das Gif oder Video mit dem Schlüssel `key` aus der **doms** Liste. Wenn vorher ein Dom ausgewählt wurde, wird es automatisch angehalten und versteckt.| nein |
|  setDomSize(`width`,`height`) | custom |Setzt die Breite des aktuell ausgewählten Gifs oder Video auf `width` und die Höhe auf `height`. Setzt nur die Größe des aktuellen Video oder Gifs neu!| nein |
|  showDom() | custom |Zeigt das aktuell ausgewählte Dom an.| nein |
|  hideDom() | custom |Versteckt das aktuell ausgewählte Dom an.| nein |
|  playDom() | custom |Spielt das aktuell ausgewählte Dom ab. Wird nur bei Videos benutzt.| nein |
|  stopDom() | custom |Stoppt das aktuell ausgewählte Dom. Wird nur bei Videos benutzt.| nein |
|  setDomOffset(`x`,`y`) | custom |Setzt ein Offset für das aktuell ausgewählte Dom| nein |
|  display() | custom |Verwaltet die Reinfolge der Anzeigen von draw und currentImage. Wendet auch die angegebenen Transformationen(Rotation und Offset) an.| nein |
|  getRealXY() | custom |Gibt die echten Koordinaten auf dem Canvas als Objekt zurück.| nein |

### Interactive Object extendes Interactive Obejct

#### Constructor
  Der Constructor verlangt **x**, **y**, **width**, **height**, **shape**. Setzt alle unten aufgeführten Attribute. Außerdem wird die imageWidth und imageHeight gleich width und height gesetzt.
#### Attribute
|name|Bescheibung|
| --- | --- |
|**width**|Setzt die Breite der Hitbox. Bei einem ROUND Shape zählt nur dieser Wert.|  
|**height** |Setzt die Höhe der Hitbox.|
|**shape** |Bestimmt das Shape der Hitbox. Auch wird hier bestimmt, wie das Bild des Obejektes gezeichnet wird. RECT Shapes beginnen oben Links, ROUND Shapes beginnen in der Mitte|  
|**enabled** |Bestimmt true/false , ob das Objekt interagierbar ist.(Anklickbar, Update, etc)|
|**children** |Speichert die Kinder des Obejektes in einem Array|
|**hovered** |Ist true/false, je nachdem ob das Objekt gehovered wird oder nicht.|
|**waitStarttime** |Wenn die Funktion wait() aufgerufen wird, wird hier die Startzeit des Wartepunktes zwischengespeichert.|
|**waitTime** |Speichert die Zeit die gewartet werden soll, wenn wait() aufgerufen wird in Sekunden.|


#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
|  onUpdate() | jeden Frame | Löst die onUpdate()-Funktion bei allen **children** aus, welche Interactive Objects sind. Ansonsten wird update() aufgerufen. Wird nur ausgeführt, wenn die waitStartTime === 0 ist und das Objekt enabled ist.| nein |
|  onInit() | Am Anfang der Anwendung | Löst die onInit()-Funktion bei allen **children** aus, welche Interactive Objects sind. Ansonsten wird init() aufgerufen.| nein |
|  enable(`hide`) | custom | Kann mit oder ohne Argument ausgeführt werden.**Enabeld** wird auf true gesetzt. Wenn es `ohne Argument` aufgerufen wird, wird das Objekt auch eingeblendet. Wenn `true übergeben` wird, wird das Objekt versteckt.| nein |
|  disable(`hide`) | custom | Kann mit oder ohne Argument ausgeführt werden.**Enabeld** wird auf false gesetzt. Wenn es `ohne Argument` aufgerufen wird, wird das Objekt versteckt. Wenn `false übergeben` wird, wird das Objekt angezeigt.| nein |
|  hitTest(`x`,`y`) | custom | Überprüft ob der Punkt(`x`, `y`) in dem Objekt liegt. Gibt true oder false zurück | nein |
|  setHitboxSize(`w`,`h`) | custom | Ändert die Breite und Höhe der Hitbox auf `w` und `h` | nein |
|  resize(`sizeX`,`sizeY`) | custom | Ändert die Breite und Höhe der Hitbox, des angezeigten Bildes und des **currentDom** auf einen schlag.(**width**, **height**, **imageWidth**, **imageHeight**, setDomSize()) | nein |
| wait(`sek`) | custom | Setzt **waitTime** auf `sek` und rechnet `sek` in Millisekunden um. Das Objekt ist nicht mehr interaktiv. (update und die ganzen Mouseevents werden nicht mehr aufgerufen).| nein |
| addChild(`obj`) | custom |Fügt das `obj` hinten an die **children** Liste an.| nein |
| removeChild(`obj`) | custom |Entfernt das `obj` von **children** Liste.| nein |
| clicked() | Nach dem die Maus geklickt wurde |Die Funktion ist Standard mäßig leer. Sie kann in erbenden Klassen geändert werden. Sie wird nur aufgerufen wenn die Maus über diesem Objekt ist.| ja |
| released() | Nach dem die Maus losgelassen wurde |Die Funktion ist Standard mäßig leer. Sie kann in erbenden Klassen geändert werden. Sie wird nur aufgerufen wenn die Maus über diesem Objekt ist.| ja |
| pressed() | Wird *einmal* aufgerufen, wenn die Maus gepresst wird |Die Funktion ist Standard mäßig leer. Sie kann in erbenden Klassen geändert werden. Sie wird nur aufgerufen wenn die Maus über diesem Objekt ist.| ja |
| hover() | Während die Maus über den Objekt hovered |Die Funktion ist Standard mäßig leer. Sie kann in erbenden Klassen geändert werden. Sie wird nur aufgerufen wenn die Maus über diesem Objekt ist.| ja |
| hoverEnd() |  Wenn ein Hover endet |Sie ist für alle Logik da die beim Ende eines Hovers stattfinden sollen.| ja |
| mouseClicked() | Nach dem die Maus geklickt wurde |Ruft erst clicked() der in **children** gespeicherten Objekte auf, dann ihre eigene.| nein |
| mouseReleased() | Nach dem die Maus losgelassen wurde |Ruft erst released() der in **children** gespeicherten Objekte auf, dann ihre eigene.| nein |
| mousePressed() |  Wird *einmal* aufgerufen, wenn die Maus gepresst wird |Ruft erst pressed() der in **children** gespeicherten Objekte auf, dann ihre eigene.| nein |
| mouseHover() |   Während die Maus über den Objekt hovered  |Ruft erst hovered() der in **children** gespeicherten Objekte auf, dann ihre eigene. Setzt **hovered** auf true, wenn das Objekt gehovered wird, ansonsten auf false. Außerdem ruft es hoverEnd auf, wenn der Hover endet.| nein |
| display() | custom |Überschreibt die Display Funktion von displayObject. Sorgt erst für die eigene Dastellung, und führt danach die display() Methoden der Kinder aus| nein |
| rotateRealPoint(`x`, `y`) | custom |Rotiert den Punkt(`x`, `y`), um die Achse und Rotation des Objekts und aller Eltern Objekte.| nein |
| getRealRotation() | custom |Gibt die Summe der eigenen Rotation mit der Rotation der Eltern Objekte zurück.| nein |




