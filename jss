#!/bin/sh -e
# Compile a java file and run it. Caching the class files in the process according to checksum of source file.
CACHE=/tmp/jss
mkdir -p $CACHE
CKSUM_OUTPUT=`cat $1 | cksum`
CHECKSUM="${CKSUM_OUTPUT% *}"
LOG=$CACHE/$CHECKSUM.log
OUTPUT="$CACHE/${CHECKSUM}"
OUTPUT_JAVA="$OUTPUT/jss$CHECKSUM.java"
if [ ! -d "$OUTPUT" ]
then
	echo "Compiling $1 to $OUTPUT" >> $LOG
	mkdir -p $OUTPUT
	echo "Generating source file at $OUTPUT_JAVA" >> $LOG
	echo "public class jss$CHECKSUM { public static void main(String[] args) {" > $OUTPUT_JAVA
	sed 1d $1 >> $OUTPUT_JAVA
	echo "}}" >> $OUTPUT_JAVA
	COMMAND="javac ""-d $OUTPUT"" $OUTPUT_JAVA"
	echo "Command: $COMMAND" >> $LOG
	$COMMAND
fi
java -cp "$OUTPUT" jss$CHECKSUM
