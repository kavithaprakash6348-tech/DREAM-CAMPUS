function findCollege()
{
    let marks = parseInt(document.getElementById("marks").value);
    let location = document.getElementById("location").value;

    // Minimum Marks
    if (marks < 70)
    {
        document.getElementById("result").innerHTML =
        `
        <div class="college-card">
            <h3>❌ Not Eligible</h3>
            <p>Minimum required marks are 70.</p>
        </div>
        `;
        return;
    }

    // COIMBATORE
    if (location == "Coimbatore")
    {
        if (marks >= 95)
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆 PSG College of Technology</h3>
                <p>Match Score: 98%</p>
                <p>Placement: 95%</p>
                <p>Fees: ₹90,000</p>
                <br>
                <a href="psg.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }

        else if (marks >= 90)
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆 Kumaraguru College of Technology</h3>
                <p>Match Score: 85%</p>
                <p>Placement: 90%</p>
                <p>Fees: ₹80,000</p>
                <br>
                <a href="kumaraguru.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }

        else
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆 KPR College of Institution  </h3>
                <p>Match Score: 90%</p>
                <p>Placement: 88%</p>
                <p>Fees: ₹100000</p>
                <br>
                <a href="KPR.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }
    }

    // CHENNAI
    else if (location == "Chennai")
    {
        if (marks >= 95)
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆 Sathyabama institute of science and technology</h3>
                <p>Placement: 94%</p>
                <p>Fees: ₹1,00,000</p>
                <br>
                <a href="ssn.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }

        else if (marks >= 85)
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆 SRM Institute of Science and Technology</h3>
                <p>Placement: 92%</p>
                <p>Fees: ₹1,10,000</p>
                <br>
                <a href="srm.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }

        else
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆CIT College</h3>
                <p>Placement: 85%</p>
                <p>Fees: ₹70,000</p>
                <br>
                <a href="cit.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }
    }
    
    // ERODE
    else if (location == "Erode")
    {
        if (marks >= 95)
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆 Kongu Engineering College</h3>
                <p>Placement: 95%</p>
                <p>Fees: ₹85,000</p>
                <br>
                <a href="kongu.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }

        else if (marks >= 90)
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆 Bannari Amman Institute of Technology</h3>
                <p>Placement: 90%</p>
                <p>Fees: ₹80,000</p>
                <br>
                <a href="bit.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }

        else
        {
            document.getElementById("result").innerHTML =
            `
            <div class="college-card">
                <h3>🏆 Nandha Engineering College</h3>
                <p>Placement: 82%</p>
                <p>Fees: ₹70,000</p>
                <br>
                <a href="nandha.html">
                    <button>View College Details</button>
                </a>
            </div>
            `;
        }
    }
}
function findCollege()
{
    // All your existing code
}
