MAIN=unixone
TEXFILES=$(wildcard *.tex)
HTMLFILES=$(wildcard *.html)

all :	$(MAIN).pdf $(MAIN).html $(MAIN).epub

$(MAIN).pdf:	$(TEXFILES)
	latex $(MAIN).tex
	dvips $(MAIN).dvi
	ps2pdf $(MAIN).ps

$(MAIN).html:	$(TEXFILES)
	htlatex $(MAIN).tex "xhtml,2,info"
	sed -i -e's/unixone.css/unixone1.css/' *.html

$(MAIN).epub:	$(HTMLFILES)
	cp *.html OEBPS/Text
	zip -X -0 $(MAIN).epub mimetype
	zip -X -9 $(MAIN).epub -r META-INF OEBPS

clean:
	rm *.dvi *.ps *.4* *.log *.lg *.tmp *.xref *.idv *.toc *.aux *.out

clean-all:
	rm *.pdf  *.css *.html *.png *.epub
