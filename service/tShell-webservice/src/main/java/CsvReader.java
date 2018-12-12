import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class CsvReader {

	public static void main(String[] args) {
		String file = "D:\\Questions Format.csv";
		FileReader fileReader = null;
		BufferedReader bufferedReader = null;
		String line = "";
		String csvSplitBy = ",";
		try {
			fileReader = new FileReader(file);
			bufferedReader = new BufferedReader(fileReader);
			line = bufferedReader.readLine();
			while ((line = bufferedReader.readLine()) != null) {
				String csvData[] = line.split(csvSplitBy);
				System.out.println("Question->" + csvData[0]);
				System.out.println("Option 1-> " + csvData[1]);
				System.out.println("Option 2-> " + csvData[2]);
				System.out.println("Option 3-> " + csvData[3]);
				System.out.println("Option 4-> " + csvData[4]);
				System.out.println("Option 5-> " + csvData[5]);
				System.out.println("Answer -> " + csvData[6]);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (bufferedReader != null) {
				try {
					bufferedReader.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (fileReader != null) {
				try {
					fileReader.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
