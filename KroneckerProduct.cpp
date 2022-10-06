// C++ code to find the Kronecker Product of two
// matrices and stores it as matrix C
#include <iostream>
using namespace std;

// rowa and cola are no of rows and columns
// of matrix A
// rowb and colb are no of rows and columns
// of matrix B
const int cola = 2, rowa = 3, colb = 3, rowb = 2;

// Function to computes the Kronecker Product
// of two matrices
void Kroneckerproduct(int A[][cola], int B[][colb])
{

    int C[rowa * rowb][cola * colb];

    // i loops till rowa
    for (int i = 0; i < rowa; i++)
    {

        // k loops till rowb
        for (int k = 0; k < rowb; k++)
        {

            // j loops till cola
            for (int j = 0; j < cola; j++)
            {

                // l loops till colb
                for (int l = 0; l < colb; l++)
                {

                    // Each element of matrix A is
                    // multiplied by whole Matrix B
                    // resp and stored as Matrix C
                    C[i + l + 1][j + k + 1] = A[i][j] * B[k][l];
                    cout << C[i + l + 1][j + k + 1] << " ";
                }
            }
            cout << endl;
        }
    }
}

// Driver Code
int main()
{
    int A[3][2] = {{1, 2}, {3, 4}, {1, 0}},
        B[2][3] = {{0, 5, 2}, {6, 7, 3}};

    Kroneckerproduct(A, B);
    return 0;
}

// This code is contributed by shubhamsingh10
